from abc import ABCMeta, abstractstaticmethod

class IPerson(metaclass=ABCMeta):

    @abstractstaticmethod
    def person_method():
        """ overrite this interface method with yours """


class Student(IPerson):
    def __init__(self):
        self.name = "umm student name"

    def person_method(self):
        print("24 years old, student desu")

class Teacher(IPerson):
    def __init__(self):
        self.name = "umm teacher name"

    def person_method(self):
        print("Teacher " * 3)

#factory design:
class PersonFactory:

    @staticmethod
    def build_person(person_type):
        if person_type == "Student":
            return Student()
        if person_type == "Teacher":
            return Teacher()
        print("Invalid Type")
        return -1

# this is main!
if __name__ == "__main__":
    choice = input("Type?")
    person = PersonFactory.build_person(choice)
    person.person_method()

# s1 = Student()
# s1.person_method()

# t1 = Teacher()
# t1.person_method()
