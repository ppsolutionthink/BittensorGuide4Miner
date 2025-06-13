## Subnets
**All Subnets** from Bittensor Blockchain Explorer
https://taostats.io/subnets

**All Subnets** from LearnBittensorOrg
https://learnbittensor.org/subnets

### Subnet Types
| Subnet Type	| Tasks | Requirements |
| ------------- | ----- | ------------ |
| 💬 Language | LLM completions, Q&A | GPU, Python, Transformers |
| 🖼️ Vision/Image Gen | Image generation, captioning | GPU, Stable Diffusion, PyTorch |
| 📦 Storage | Decentralized file storage | CPU, storage disk space |
| 📊 Prediction | Forecasting markets, sports, etc. | Python, data science |
| 🌐 Data Gathering | Scraping, cleaning, summarizing | Scraper tools, bandwidth, CPU |
| 🎙️ Speech / TTS | Voice generation or processing | GPU, audio pipelines |
| 🧠 Pretraining | Training models from scratch | Powerful GPU cluster |


### Subnet Comparison Table
| **Subnet**                | **Need Coding?** | **Need GPU?** | **Reward Potential**  | **Easy to Start?** | **Description**                                                                        | **Best For**                                            |
| ------------------------- | ---------------- | ------------- | --------------------- | ------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| **SN1 – Apex (Root)**     | None             | Optional      | Low–Medium (\~1.9%)   | ✅✅✅                | Default subnet. Accepts generic prompt-response agents.                                | Beginners, testing, learning the network                |
| **SN3 – Templar**         | Medium           | Yes           | **High (\~6.2%)**     | ✅✅                 | Text-only. Evaluates helpfulness, correctness, and relevance of LLM output.            | High-quality LLM miners (Mistral, GPTQ, LLaMA)          |
| **SN4 – Targon**          | Medium           | Yes           | **High (\~5.8%)**     | ✅✅                 | Chat-focused. Prioritizes coherent, diverse, and contextually rich dialogue.           | Chatbots, conversational AI agents                      |
| **SN8 – Prompt-Response** | Low              | Yes           | Medium (\~3.7%)       | ✅✅✅                | Simple prompt-response tasks using inference models. Good rewards with low complexity. | Inference mining with local or API-based models         |
| **SN61 – RedTeam**        | None             | Optional      | Medium–High (\~0.38%) | ✅                  | Submit adversarial or creative prompts that test model robustness.                     | Prompt hackers, creative writers, AI safety enthusiasts |


| **Your Goal**                                      | **Best Subnet** | **Why**                                                        |
| -------------------------------------------------- | --------------- | -------------------------------------------------------------- |
| 🌱 Just starting out                               | **SN1 or SN8**  | Very easy setup, tolerant scoring, low risk                    |
| ⚡ Want high rewards                                | **SN3 or SN4**  | Requires quality output from strong models, but high emissions |
| 🧠 Love prompt engineering (no code)               | **SN61**        | Rewards clever, manipulative, or adversarial prompts           |
| 🧪 Running models via API or local inference       | **SN8 or SN4**  | Flexible setups, minimal code needed                           |
| 🤖 Building chatbot-like systems                   | **SN4**         | Focused on dialog realism and coherence                        |
| 🧪 Exploring model safety, jailbreaking, AI ethics | **SN61**        | Unique niche with growing validator support                    |


| Subnet | Emissions | Effort   | Notes                                       |
| ------ | --------- | -------- | ------------------------------------------- |
| SN1    | Low       | Very Low | Great for experimentation                   |
| SN8    | Medium    | Low      | Balanced reward and ease                    |
| SN61   | Med–High  | Medium   | High return if you're creative              |
| SN4    | High      | Medium   | Best for conversational AI                  |
| SN3    | High      | High     | High bar for helpful and relevant responses |


### SN1 - APEX (Root)
**APEX is the first live Large Language Model application on the Bittensor network**
https://github.com/macrocosm-os/apex

**Apex** is the frontend interface for Subnet 1, giving users access to our LLMs in a way that feels similar to leading centralised and open-source tools.


- Generalized Miner Tutorial
https://docs.bittensor.com/subnets/register-validate-mine#running-a-subnet-miner

- SN1 Miner Tutorial
https://github.com/macrocosm-os/prompting/blob/main/assets/miner.md

We highly recommend that you run your miners on testnet before deploying on main. This is give you an opportunity to debug your systems, and ensure that you will not lose valuable immunity time.
*The `SN1` testnet is netuid `61`.*

In order to run on testnet, you will need to go through the same `hotkey` registration proceure as on main, but using testtao. *You will need to ask for some in the `community discord` if you do not have any.*

Then, simply set `test=True` in your `.env` file and execute all other steps as before.

Then post in the `Subnet 1` channel on `discord` so we can activate a validator for your miner to respond to.

You can use wandb to see how successful your miner would be on mainnet, an example notebook is pinned in the channel.

> The openai miner provided in this repo is not intended to be run on mainnet!
>
> If you run the base miner on mainnet, you will not earn anything! It is provided as an example to help you build your own custom mining operation!

