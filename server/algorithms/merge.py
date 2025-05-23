"""Merge sort implementation with metrics tracking."""

from typing import Iterable, List, Tuple, Dict, Generator

Metrics = Dict[str, int]


def merge_sort(data: Iterable[int]) -> Generator[Tuple[List[int], Metrics], None, None]:
    arr = list(data)
    metrics: Metrics = {"comparisons": 0, "swaps": 0}
    yield from _merge_sort(arr, 0, len(arr) - 1, metrics)
    yield arr[:], metrics.copy()


def _merge_sort(arr: List[int], left: int, right: int, metrics: Metrics) -> Generator[Tuple[List[int], Metrics], None, None]:
    if left >= right:
        return
    mid = (left + right) // 2
    yield from _merge_sort(arr, left, mid, metrics)
    yield from _merge_sort(arr, mid + 1, right, metrics)
    yield from _merge(arr, left, mid, right, metrics)


def _merge(arr: List[int], left: int, mid: int, right: int, metrics: Metrics) -> Generator[Tuple[List[int], Metrics], None, None]:
    L = arr[left:mid + 1]
    R = arr[mid + 1:right + 1]
    i = j = 0
    k = left
    while i < len(L) and j < len(R):
        metrics["comparisons"] += 1
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
            metrics["swaps"] += 1
        k += 1
        yield arr[:], metrics.copy()

    while i < len(L):
        arr[k] = L[i]
        i += 1
        k += 1
        yield arr[:], metrics.copy()

    while j < len(R):
        arr[k] = R[j]
        j += 1
        k += 1
        metrics["swaps"] += 1
        yield arr[:], metrics.copy()
