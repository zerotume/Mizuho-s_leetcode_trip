class Person:
        def __init__(self, name, age, gender):
            self.__name = name
            self.__age = age
            self.__gender = gender

        # @property means getter
        @property
        def name(self):
            return self.__name

        # and this is setter wrapper
        @name.setter
        def name(self, value):
            self.__name = value

        @staticmethod
        def mymethod():
            print("meow")

p1 = Person("Mike", 20, 'cat')
print(p1.name)
#print(p1.__name)

Person.mymethod()
p1.mymethod()
