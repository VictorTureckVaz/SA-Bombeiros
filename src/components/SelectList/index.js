import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useState } from 'react';

export default function SelectList({
    options,
    selectedOptionValue,
    selectedOptionName,
    setSelectedOptionValue,
    setSelectedOptionName,
    title,
}) {
    function handleOptionSelection(value, name) {
        setSelectedOptionValue(value); // seta o valor da opção como o valor da opção selecionada
        setSelectedOptionName(name)
        setUsingMenu(!usingMenu); // aumenta o using menu para considerar como desativado
    }

    const [usingMenu, setUsingMenu] = useState(0);

    return (
        <View style={[styles.UsingMenu, { height: usingMenu ? "fit-content" : 56 }]}>
            <TouchableOpacity style={styles.UsingMenuTitle} onPress={ () => setUsingMenu(!usingMenu) }>
                <Text style={styles.Text}>{title} {selectedOptionName}</Text>
                <View style={styles.UsingMenuIconContainer}>
                    <Image
                        style={[
                            styles.UsingMenuIcon,
                            {
                                transform: usingMenu
                                    ? [{ rotate: "180deg" }]
                                    : [{ rotate: "0deg" }]
                            }
                        ]}
                        source={require('../../../assets/downArrow.png')}
                    />
                </View>
            </TouchableOpacity>
            {options.map((option, i) => (
                <TouchableOpacity
                    key={`${i} ${option.optionName}`}
                    style={[
                        styles.UsingMenuTitle,
                        {
                            display: usingMenu
                                ? "flex"
                                : "none"
                        }
                    ]}
                    onPress={ () => handleOptionSelection(option.optionValue, option.optionName) }
                >
                    <Text style={styles.Text}>{option.optionName}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
