import numpy as np

arr1 = np.array([[1,2],[3,4]])
arr2 = np.array([[5,6],[7,8]])

print(arr1.shape)
s = arr1 + arr2
d = arr1 - arr2
p = arr1 * arr2
m_p = arr1.dot(arr2)# linear algebra support!
q = arr1 / arr2 # cool!

# print(s)
# print(d)
# print(p)
# print(m_p)
# print(q)

# print version and config
# print(np.__version__)
# np.show_config()

# generate an empty vector with length of 10
z = np.zeros(10)
print(z)

# memory size of an array
print(f"{z.itemsize} for each element")
print(f"{z.size * z.itemsize}bytes")

# doc of one function
# numpy.info(name of the function)
# print(np.info(np.add))

# an empty vector with length of 10 but 5th value is 1?
z = np.zeros(10)
z[4] = 1
print(z)

# array range from 10 to 49
z = np.arange(10,50)
print(z)
# reverse it
z = z[::-1]
print(z)
