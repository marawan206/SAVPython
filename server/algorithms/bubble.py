from typing import Iterable, List, Tuple, Dict, Generator

Metrics = Dict[str, int]


def bubble_sort(data: Iterable[int]) -> Generator[Tuple[List[int], Metrics], None, None]:
    """Yield array state and metrics at each swap of bubble sort."""
    arr: List[int] = list(data)
    metrics: Metrics = {"comparisons": 0, "swaps": 0}

    # initial state
    yield arr.copy(), metrics.copy()

    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            metrics["comparisons"] += 1
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                metrics["swaps"] += 1
                swapped = True
                yield arr.copy(), metrics.copy()
        if not swapped:
            break
    yield arr.copy(), metrics.copy()
