import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from server.algorithms.bubble import bubble_sort
from server.algorithms.selection import selection_sort
from server.algorithms.insertion import insertion_sort
from server.algorithms.merge import merge_sort
from server.algorithms.quick import quick_sort
from server.algorithms.heap import heap_sort


def collect_final_state(gen):
    result = None
    for state, metrics in gen:
        result = (state, metrics)
    return result


def check_algorithm(sort_func):
    data = [5, 1, 4, 2, 8]
    sorted_array, metrics = collect_final_state(sort_func(data))
    assert sorted_array == sorted(data)
    assert metrics['comparisons'] >= len(data) - 1
    assert metrics['swaps'] >= 0


def test_bubble():
    check_algorithm(bubble_sort)


def test_selection():
    check_algorithm(selection_sort)


def test_insertion():
    check_algorithm(insertion_sort)


def test_merge():
    check_algorithm(merge_sort)


def test_quick():
    check_algorithm(quick_sort)


def test_heap():
    check_algorithm(heap_sort)
