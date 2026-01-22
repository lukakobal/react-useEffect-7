# React 67 – Auto-save with useEffect 💾

Real-world example of using `useEffect` to sync React state
with an external system (`localStorage`).

## 🧠 What happens
- render shows UI
- user types → state changes
- `useEffect` saves draft **after render**
- no infinite loop

## 🔑 Key idea
useEffect reacts to state, but does not control rendering itself.

https://codesandbox.io/p/sandbox/shzqlg?file=%2Fsrc%2FApp.js
