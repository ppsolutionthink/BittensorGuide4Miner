## Templar Subnet
Research / Text / Training / Distributed
[doc](https://learnbittensor.org/subnets/3)

AI training today faces a fundamental access challenge. Big tech companies like OpenAI and Meta control training through massive data centers. These centers have thousands of GPUs. Building and running these setups costs billions of dollars. This creates a big barrier to entry. Meanwhile, talented developers worldwide lack access to these resources. They cannot train large language models (LLMs) on their own.

### Templar's Solution
Templar solves this by combining computing resources from participants worldwide. Developers don't need billions to build a data center. They can contribute their individual GPUs to train models together. Every GPU contributes to the same model instead of duplicating work.

This approach makes large-scale AI training available to more people. Anyone who can contribute computing power can participate. The combined resources aim to match the power of traditional systems.

Templar recently completed training a 1.2 billion parameter model. Parameters are the settings that determine how the AI behaves. This involved over 20,000 training cycles. About 200 GPUs participated in the process. Building on this success, future plans target 70 billion parameters and beyond.


### Understanding the Miner's Work
The training process runs on a precise schedule. Every `84` seconds, the subnet assigns each miner a specific data portion called a "page." This assignment happens randomly to ensure fairness. It prevents anyone from cheating by knowing their work in advance.

Each miner then performs real training work on their assigned data pages. Miners run the current AI model on their data to see how well it performs. They measure the model's mistakes (called "loss"). Based on these errors, miners calculate mathematical instructions called "pseudo-gradients". These tell the model exactly how to adjust itself to become better/smarter.

The goal is to process as much data as possible within the 84-second window. Miners who process more data are likely to produce better improvements. This creates competition between miners to optimize their training methods.

Once calculations are complete, miners upload these pseudo-gradients to shared cloud storage buckets. These are called "R2 buckets." Miners must share their storage read keys, making their gradients publicly available. This creates an open system where validators can access and verify everyone's work.

### How the Global Model Gets Updated
Each miner works on different data. Their contributions get combined to improve one shared AI model. Validators collect pseudo-gradients from multiple miners and select the **top 15 highest-quality** contributions. These get mathematically combined and applied to the global model. This creates an improved version that benefits from all the different training work. This updated model then gets shared with all participants for the next training round.

### How Miners Get Rewarded
The subnet rewards miners based on how much they improve the AI model. The biggest improvements earn the most rewards. However, miners must stay synchronized with the rest of the subnet. Anyone who falls behind sees their rewards drop quickly.

To keep quality high, only the **top 15 highest-quality miners** participate in each training round. This selective approach encourages miners to improve their performance. Competition to stay in this top group incentivizes miners to improve.

Top miners can earn up to `28 TAO` per day according to current reports. This amount changes based on miner performance and token prices. Success requires major skill. It also requires powerful hardware. **Miners need powerful H100 graphics cards with excellent internet connections**.

> DEFAULT MINER SUCCESS
    The default miner code is not strong enough to stay registered. Miners using only the default code will get deregistered from the subnet. Success requires major customization, improvement, and understanding of training techniques.