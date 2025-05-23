"""Selection sort implementation with metrics tracking."""

from typing import Iterable, List, Tuple, Dict, Generator

Metrics = Dict[str, int]


def selection_sort(data: Iterable[int]) -> Generator[Tuple[List[int], Metrics], None, None]:
    """Yield intermediate states of selection sort."""
    arr = list(data)
    n = len(arr)
    metrics: Metrics = {"comparisons": 0, "swaps": 0}

    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            metrics["comparisons"] += 1
            if arr[j] < arr[min_idx]:
                min_idx = j
            yield arr[:], metrics.copy()
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
            metrics["swaps"] += 1
            yield arr[:], metrics.copy()

    yield arr[:], metrics.copy()
