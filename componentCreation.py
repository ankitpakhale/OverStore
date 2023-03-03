import os
import touch


# 1. to create the jsx files
# for i in os.listdir():
#     name = i.split(".")[0]
#     if i.split(".")[-1:][0] == 'html':
#         touch.touch(name.capitalize()+'.jsx')
# print("created")



# 2. to delete the html files
# for i in os.listdir():
#     if i.split(".")[-1:][0] == 'html':
#         os.remove(i)
# print("deleted")



# 3. to create the component after opening the file
for i in os.listdir():
    if i.split(".")[-1:][0] == 'jsx':
        name = i.split(".")[0]
        with open(i, 'w') as file:
            returnStatement = "{\n"+f"return ( <div>{name}</div>)"+"\n}"
            file.write(
                f"import React from 'react'; \n const {name} = () => \n {returnStatement} \n export default {name}")
