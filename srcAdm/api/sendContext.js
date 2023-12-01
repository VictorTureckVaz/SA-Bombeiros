import api from "../lib/axios";

export default function SubmitContext(context) {
    api.post("/api/submit", context);
}