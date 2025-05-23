from typing import Iterable, List, Tuple, Dict, Generator

Metrics = Dict[str, int]


def heap_sort(data: Iterable[int]) -> Generator[Tuple[List[int], Metrics], None, None]:
    """
    Sort *data* using heap sort.

    Yields the array state and metrics dictionary after each swap.
    """

    arr: List[int] = list(data)
    metrics: Metrics = {"comparisons": 0, "swaps": 0}

    # initial state
    yield arr.copy(), metrics.copy()

    def heapify(n: int, i: int) -> Generator[Tuple[List[int], Metrics], None, None]:
        largest = i
        l = 2 * i + 1
        r = 2 * i + 2

        if l < n:
            metrics["comparisons"] += 1
            if arr[l] > arr[largest]:
                largest = l

        if r < n:
            metrics["comparisons"] += 1
            if arr[r] > arr[largest]:
                largest = r

        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            metrics["swaps"] += 1
            yield arr.copy(), metrics.copy()
            yield from heapify(n, largest)

    n = len(arr)

    # build max heap
    for i in range(n // 2 - 1, -1, -1):
        yield from heapify(n, i)

    # extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        metrics["swaps"] += 1
        yield arr.copy(), metrics.copy()
        yield from heapify(i, 0)

    yield arr.copy(), metrics.copy()

