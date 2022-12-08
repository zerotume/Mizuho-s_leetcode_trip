from abc import ABCMeta, abstractstaticmethod, abstractmethod

class IDepartment(metaclass=ABCMeta):

    @abstractmethod
    def __init__(self, employees):
        """ in real class  """

    @abstractstaticmethod
    def print_department():
        """ implement real class """


class Accounting(IDepartment):

    def __init__(self, employees):
        self.employees = employees

    def print_department(self):
        print(f"Accounting dept: {self.employees}")

class Development(IDepartment):

    def __init__(self, employees):
        self.employees = employees

    def print_department(self):
        print(f"Development dept: {self.employees}")

class ParentDepartment(IDepartment):

    def __init__(self, employees):
        self.employees = employees
        self.base_employees = employees
        self.sub_depts = []

    def add(self, dept):
        self.sub_depts.append(dept)
        self.employees += dept.employees

    def print_department(self):
        print("Parent dept")
        print(f"parent dept base employees {self.base_employees}")
        for dept in self.sub_depts:
            dept.print_department()
        print(f"total: {self.employees} employees")


dept1 = Accounting(200)
dept2 = Development(170)

parent_dept = ParentDepartment(30)
parent_dept.add(dept1)
parent_dept.add(dept2)

parent_dept.print_department()
