# React Tutorial Extecise 1

Imagine you're tasked with building a simple task manager application in React. Your task is to create a reusable Task component that can render individual tasks. Additionally, you need to implement the functionality to render a list of tasks passed as props to a parent component.

Write a React component called Task that receives props for a task object. The task object should have properties like id, title, description, and completed status.

Then, create a parent component called TaskList that receives an array of task objects as props. This TaskList component should iterate through the array of tasks and render each task using the Task component.

Make sure to:

- Create the Task component that takes props for an individual task and renders its details.
- Implement TaskList component to render a list of tasks by passing the array of tasks as props to it.
- Ensure that the Task component destructures its props to access individual properties like id, title, description, and completed status.
- Handle rendering both arrays and objects within the React components as you might have to handle tasks in various forms.

Test your implementation with sample data to ensure that both the Task and TaskList components function correctly in rendering tasks.

Challenge: Modify the Task component to include the functionality to toggle the completion status of a task when clicked.




