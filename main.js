function compute_coverage()
{
	return list.filter(
		a => 
			conversion(a[0]) == a[1]
			? true
			: (document.write(conversion(a[0]) + " " + a[1] + "<br>"), false)
	).length / list.length;
}

document.write(compute_coverage()*100+"%");