### PHASED EXECUTION PLAN

PHASE 1: Foundation Setup (Day 1 - May 22)

Responsible: Mahmoud (Team Leader)
Must be done first.
	1.	Create main project file (main.py)
	2.	Design menu structure:
	•	Choose sorting algorithm
	•	Input array or random generation
	•	Delay setting
	3.	Define global data format:
	•	How the array will be passed
	•	How to receive metrics (swaps, comparisons)
	•	Function call structure for each algorithm

⸻

PHASE 2: Sorting Algorithms Implementation (Parallel - Day 1)

Can be done in parallel once Mahmoud defines structure.

Youssef:
	•	Implement Bubble Sort and Selection Sort
	•	Add counting variables (comparisons, swaps)
	•	Return current array state to visualizer after every step

Aly:
	•	Implement Insertion Sort and Merge Sort
	•	Same structure: track and return array state + metrics

Donya:
	•	Implement Quick Sort and Heap Sort
	•	Integrate metrics and states after each change

NOTE: All 3 should follow the same function template so Mahmoud can easily integrate their work.

⸻

PHASE 3: Visual Output & Display (Parallel - Day 2)

Responsible: Marwan
	1.	Write a function to visualize arrays in terminal using # bars or integers.
	2.	Add os.system('cls' or 'clear') to clean terminal each step.
	3.	Optional: use colorama to highlight comparisons or swaps.
	4.	Test with Mahmoud’s menu and Donya/Youssef/Aly’s arrays.

⸻

PHASE 4: Integration & Testing (Day 2 - May 23)

All team members
	1.	Mahmoud collects functions from everyone.
	2.	Integrate into main.py with visualizer support.
	3.	Test all 6 algorithms:
	•	With random and fixed arrays
	•	With different delays
	•	With step-by-step and auto-play mode
	4.	Fix bugs, unify display and metrics format.

⸻

PHASE 5: Final Polish & Documentation (Day 3 - May 24)

All team members or delegated
	1.	Finalize code and clean comments.
	2.	Write README:
	•	Project goal
	•	How to run it
	•	Description of each feature
	3.	Test in different terminals (Windows/Linux/macOS)
	4.	Zip files and submit