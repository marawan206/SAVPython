"""Insertion sort implementation with metrics tracking."""

from typing import Iterable, List, Tuple, Dict, Generator

Metrics = Dict[str, int]


def insertion_sort(data: Iterable[int]) -> Generator[Tuple[List[int], Metrics], None, None]:
    """Yield intermediate states of insertion sort."""
    arr = list(data)
    metrics: Metrics = {"comparisons": 0, "swaps": 0}

    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            metrics["comparisons"] += 1
            arr[j + 1] = arr[j]
            metrics["swaps"] += 1
            j -= 1
            yield arr[:], metrics.copy()
        arr[j + 1] = key
        metrics["swaps"] += 1
        yield arr[:], metrics.copy()

    yield arr[:], metrics.copy()
