import dotenv from "dotenv"
import Prompt from "./Prompt"

dotenv.config()

main()

function main() {
    const prompt = new Prompt()
    prompt.init()
}