import numpy as np

arr1 = np.array([[1,2],[3,4]])
arr2 = np.array([[5,6],[7,8]])

print(arr1.shape)
s = arr1 + arr2
d = arr1 - arr2
p = arr1 * arr2
m_p = arr1.dot(arr2)# linear algebra support!
q = arr1 / arr2 # cool!

print(s)
print(d)
print(p)
print(m_p)
print(q)
