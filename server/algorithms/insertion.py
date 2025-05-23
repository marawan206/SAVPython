from typing import Iterable, List, Tuple, Dict, Generator

Metrics = Dict[str, int]

def insertion_sort(data: Iterable[int]) -> Generator[Tuple[List[int], Metrics], None, None]:
