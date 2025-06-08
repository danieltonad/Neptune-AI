import json
import aiofiles
from typing import Dict, List

# Async read JSON from a file
async def fetch_dummy_source() -> List[Dict]:
    async with aiofiles.open("./dummy.json", 'r') as f:
        content = await f.read()
        return json.loads(content)
