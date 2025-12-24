# Updates all stolen skills to reflect a 227 change where you get +1 slot in 3rd job
update stolenskills
set position = position + 1
where position >= 13