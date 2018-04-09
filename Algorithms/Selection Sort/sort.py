a = [6,43,32,1,23,4,8,7]

def selectionSort (a):
    for i in range(0,len(a)):
        testValue = a[i]
        for x in range(i+1,len(a)):
            if(testValue > a[x]):
                testValue = a[x]
                a[x] = a[i]
                a[i] = testValue
    print(a)



selectionSort(a)