# helloworld_miner.py
import bittensor
from loguru import logger
from pydantic import Field
from typing import Optional
import time

# 1. Define a simple Synapse schema ------------------------------------------
class HelloSynapse(bittensor.Synapse):
    prompt: str = Field(..., description="Incoming text prompt")
    completion: Optional[str] = Field(None, description="Miner's reply")

# 2. Forward handler ----------------------------------------------------------
def forward_hello(synapse: HelloSynapse) -> HelloSynapse:
    logger.info(f"Prompt received ➜ {synapse.prompt}")
    synapse.completion = "Hello from subnet 261! 👋"
    return synapse

# 3. Main entry-point ---------------------------------------------------------
def main() -> None:
    # --- Wallet & chain connection ------------------------------------------
    wallet     = bittensor.wallet(name="jeipi", hotkey="jeipi")  # local keys
    subtensor  = bittensor.subtensor(network="test")            # Finney test-chain

    # --- Axon server --------------------------------------------------------
    axon = bittensor.axon(wallet=wallet, port=8091)             # bind port 8091
    axon.attach(forward_fn=forward_hello)                       # register endpoint

    # `serve()` registers the Axon on-chain; `start()` launches the HTTP server
    axon.serve(netuid=261, subtensor=subtensor).start()
    logger.success("Miner is online and serving on subnet 261 🚀")

    try:
        # Keep the process alive manually
        while True:
            time.sleep(60)
    except KeyboardInterrupt:
        logger.info("Shutting down miner…")
        axon.stop()

if __name__ == "__main__":
    main()
