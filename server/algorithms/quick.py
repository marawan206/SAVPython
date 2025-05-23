from typing import Iterable, List, Tuple, Dict, Generator

Metrics = Dict[str, int]


def quick_sort(data: Iterable[int]) -> Generator[Tuple[List[int], Metrics], None, None]:
    """
    Sort *data* using quick sort.

    Yields the list state and metrics dictionary after each swap so the
    front–end visualiser can display the progress step by step.
    """

    arr: List[int] = list(data)
    metrics: Metrics = {"comparisons": 0, "swaps": 0}

    # yield the initial state so the UI can display the starting array
    yield arr.copy(), metrics.copy()

    def partition(low: int, high: int) -> Generator[int, None, int]:
        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            metrics["comparisons"] += 1
            if arr[j] <= pivot:
                i += 1
                if i != j:
                    arr[i], arr[j] = arr[j], arr[i]
                    metrics["swaps"] += 1
                    yield arr.copy(), metrics.copy()
        if i + 1 != high:
            arr[i + 1], arr[high] = arr[high], arr[i + 1]
            metrics["swaps"] += 1
            yield arr.copy(), metrics.copy()
        return i + 1

    def _quick_sort(low: int, high: int) -> Generator[Tuple[List[int], Metrics], None, None]:
        if low < high:
            gen = partition(low, high)
            # consume the generator produced by partition yielding states
            while True:
                try:
                    state = next(gen)
                    if isinstance(state, tuple):
                        yield state
                except StopIteration as e:
                    pivot_index = e.value
                    break
            yield from _quick_sort(low, pivot_index - 1)
            yield from _quick_sort(pivot_index + 1, high)

    yield from _quick_sort(0, len(arr) - 1)

    # final state
    yield arr.copy(), metrics.copy()
