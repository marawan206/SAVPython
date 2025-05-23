import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from server.algorithms.bubble import bubble_sort


def test_bubble_sort_basic():
    data = [5, 1, 4, 2, 8]
    result = None
    for state, metrics in bubble_sort(data):
        result = (state, metrics)
    assert result is not None
    sorted_array, metrics = result
    assert sorted_array == sorted(data)
    assert metrics['comparisons'] >= len(data) - 1
    assert metrics['swaps'] > 0
