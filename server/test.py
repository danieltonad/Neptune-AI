import asyncio
from utils import fetch_dummy_source
from  search_agent import search_and_format_artisans


async def async_test():
    # data = await fetch_dummy_source()
    # print(len(data))
    data = await search_and_format_artisans("plumber in Lagos, Nigeria")
    print(data)
    
    
    
asyncio.run(async_test())