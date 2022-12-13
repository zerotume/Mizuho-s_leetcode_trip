from __future__ import annotations # allows things in class to typehint itself
import math
from itertools import repeat

class vEB:
    def __init__(self, size:int) -> None:
        self.u = size
        self.min = -1
        self.max = -1
        if size <= 2:
            self.summary = None
            self.clusters = []
        else:
            no_clusters = math.ceil(math.sqrt(size))
            self.summary = vEB(no_clusters)
            self.clusters = list(repeat(None, no_clusters))

            for c in self.clusters:
                c = vEB(no_clusters)

    def high(self, x:int) -> int:
        div = math.ceil(math.sqrt(self.u))
        return x // div

    def low(self, x:int) -> int:
        mod = math.ceil(math.sqrt(self.u))
        return x % mod

    def generate_index(self, x:int, y:int) -> int:
        ru = math.ceil(math.sqrt(self.u))
        return x*ru + y
