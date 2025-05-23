"""Bubble sort implementation with metrics tracking."""

from typing import Iterable, List, Tuple, Dict, Generator

Metrics = Dict[str, int]


def bubble_sort(data: Iterable[int]) -> Generator[Tuple[List[int], Metrics], None, None]:
    """Yield intermediate states of bubble sort.

    Each iteration yields the current list state and a dictionary with the
    accumulated number of comparisons and swaps performed so far.
    """
    arr = list(data)
    n = len(arr)
    metrics: Metrics = {"comparisons": 0, "swaps": 0}

    for i in range(n):
        for j in range(0, n - i - 1):
            metrics["comparisons"] += 1
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                metrics["swaps"] += 1
            # Yield a copy to avoid external mutation
            yield arr[:], metrics.copy()

    # Final state
    yield arr[:], metrics.copy()
