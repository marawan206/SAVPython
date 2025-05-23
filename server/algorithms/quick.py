"""Quick sort implementation with metrics tracking."""

from typing import Iterable, List, Tuple, Dict, Generator

Metrics = Dict[str, int]


def quick_sort(data: Iterable[int]) -> Generator[Tuple[List[int], Metrics], None, None]:
    arr = list(data)
    metrics: Metrics = {"comparisons": 0, "swaps": 0}
    if arr:
        yield from _quick_sort(arr, 0, len(arr) - 1, metrics)
    yield arr[:], metrics.copy()


def _quick_sort(arr: List[int], low: int, high: int, metrics: Metrics) -> Generator[Tuple[List[int], Metrics], None, None]:
    if low < high:
        pivot_index = yield from _partition(arr, low, high, metrics)
        yield from _quick_sort(arr, low, pivot_index - 1, metrics)
        yield from _quick_sort(arr, pivot_index + 1, high, metrics)


def _partition(arr: List[int], low: int, high: int, metrics: Metrics) -> Generator[Tuple[List[int], Metrics], None, int]:
    pivot = arr[high]
    i = low
    for j in range(low, high):
        metrics["comparisons"] += 1
        if arr[j] <= pivot:
            arr[i], arr[j] = arr[j], arr[i]
            metrics["swaps"] += 1
            yield arr[:], metrics.copy()
            i += 1
    arr[i], arr[high] = arr[high], arr[i]
    metrics["swaps"] += 1
    yield arr[:], metrics.copy()
    return i
