import numpy as np

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

#reshape
z = np.arange(9)
print(z)
z = z.reshape(3,3)
print(z)


#nonzero
nz = np.nonzero([1,2,0,2,-1,0,1])
print(nz)

#eye, n * n matrix (why it is called eye?)
z = np.eye(3)
print(z)

# #random.random, dont forget it's 2nd level function
# z = np.random.random((3,3,3))
# print(z)

#10x10 random matrix, and find min & max value
z = np.random.random((10,10))
zmin,zmax = z.min(), z.max()
print(zmin, zmax)

# mean value
z = np.random.random(30)
m = z.mean()
print(m)
