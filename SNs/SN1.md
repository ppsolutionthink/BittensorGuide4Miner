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


> Installation also works smoothly on WSL Ubuntu with sufficient memory and space (**16GB RAM, 60.2GB free disk space**). 
