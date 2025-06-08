# Neptune Score = (Rating * 20) - (Estimated Avg Price / 10)


from utils import fetch_dummy_source
import asyncio

async def async_test():
    data = await fetch_dummy_source()
    print(len(data))
    
    
    
asyncio.run(async_test())