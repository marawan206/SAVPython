"""Heap sort implementation with metrics tracking."""

from typing import Iterable, List, Tuple, Dict, Generator

Metrics = Dict[str, int]


def heap_sort(data: Iterable[int]) -> Generator[Tuple[List[int], Metrics], None, None]:
    arr = list(data)
    n = len(arr)
    metrics: Metrics = {"comparisons": 0, "swaps": 0}

    def heapify(size: int, root: int) -> Generator[Tuple[List[int], Metrics], None, None]:
        largest = root
        left = 2 * root + 1
        right = 2 * root + 2

        if left < size:
            metrics["comparisons"] += 1
            if arr[left] > arr[largest]:
                largest = left
        if right < size:
            metrics["comparisons"] += 1
            if arr[right] > arr[largest]:
                largest = right
        if largest != root:
            arr[root], arr[largest] = arr[largest], arr[root]
            metrics["swaps"] += 1
            yield arr[:], metrics.copy()
            yield from heapify(size, largest)

    for i in range(n // 2 - 1, -1, -1):
        yield from heapify(n, i)

    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        metrics["swaps"] += 1
        yield arr[:], metrics.copy()
        yield from heapify(i, 0)

    yield arr[:], metrics.copy()
