<!-- Filter the todos base on isCompleted -->

method==>GET
ACCESS==>PUBLIC
URL==> http://localhost:3000/todos

method==>GET(FILTERS)
ACCESS==>PUBLIC
URL==>http://localhost:3000/todos?isCompleted=0

method==>POST
ACCESS==>PUBLIC
URL==>http://localhost:3000/todos

method==>PATCH
ACCESS==>PUBLIC
URL==> http://localhost:3000/todos/:todoID

method==>DELETE
ACCESS==>PUBLIC
URL==> http://localhost:3000/todos/:todoID
