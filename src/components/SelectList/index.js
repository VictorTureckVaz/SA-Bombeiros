import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

export default function SelectList({
    options,
    usingMenu,
    setUsingMenu,
    selectedOption,
    setSelectedOption
}) {
    function handleOptionSelection(value) {
        setSelectedOption(value); // seta o valor da perfusão com o valor dado ao chamar a função
        setUsingMenu(!usingMenu); // aumenta o using menu para considerar como desativado
    }

    return (
        <View style={[styles.UsingMenu, { height: usingMenu ? "fit-content" : 56 }]}>
            <TouchableOpacity style={styles.UsingMenuTitle} onPress={ () => setUsingMenu(!usingMenu) }>
                <Text style={styles.Text}>{selectedOption}</Text>
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
                    onPress={ () => handleOptionSelection(option.optionValue) }
                >
                    <Text style={styles.Text}>{option.optionName}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
