import unittest

def subtract(a, b):
    return a - b

class TestSubtraction(unittest.TestCase):
    def test_subtraction(self):
        self.assertEqual(subtract(5, 3), 2)
