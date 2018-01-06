/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-06 15:39:05
 * @version $Id$
 */
function getFillGrade(){
	var fill_1 = document.getElementsByName("fill_1").getValues[0];
	var fill_2_1 = document.getElementByName("fill_2_1").getValues[0];
	var fill_2_2 = document.getElementsByName("fill_2_2").getValues[0];
	var fill_2_3 = document.getElementsByName("fill_2_3").getValues[0];
	var grade = 0;
	if (fill_1 == "统一建模语言")
		grade += 5;
	if (fill_2_1 == "封装性")
		grade += 5;
	if (fill_2_2 == "继承性")
		grade += 5; 
	if (fill_2_3 == "多态性")
		grade += 5;
	return grade;
}

function getChooseGrade(){
	var answer1 = document.getElementById("choose_1").isSelected;
	var answer2 = document.getElementById("choose_2").isSelected;
	var grade = 0;
	if (answer1 == true)
		grade += 10;
	if (answer2 == true)
		grade += 10;
	return grade;
}

function getChoosesGrade(){
	var chooses_1_a = document.getElementById("chooses_1_a").isSelected;
	var chooses_1_b = document.getElementById("chooses_1_b").isSelected;
	var chooses_1_c = document.getElementById("chooses_1_c").isSelected;
	var chooses_1_d = document.getElementById("chooses_1_d").isSelected;
	var chooses_2_a = document.getElementById("chooses_2_a").isSelected;
	var chooses_2_b = document.getElementById("chooses_2_b").isSelected;
	var chooses_2_c = document.getElementById("chooses_2_c").isSelected;
	var chooses_2_d = document.getElementById("chooses_2_d").isSelected;
	var grade = 0;
	if (chooses_1_a == true && chooses_1_b == true && chooses_1_c == false
		&& chooses_1_d ==true)
		grade += 10;
	if (chooses_2_a ==true && chooses_2_b == true && chooses_2_c == true
		&& chooses_2_d == false)
		grade += 10;
	return grade;
}

function getTFGrade(){
	var tf1 = document.getElementById("tf1").isSelected;
	var tf2 = document.getElementById("tf2").isSelected;
	var grade = 0;
	if (tf1 == true)
		grade += 10;
	if (tf2 == true)
		grade += 10;
	return grade;
}

function getQGrade(){
	var modelAnswer = document.getElementsByName("modelAnswer").getValues[0];
	if (modelAnswer == "模型是对现实世界的简化和抽象")
		return 20;
	return 0;
}

function getTalGrade(){
	var grade = getFillGrade()+getChooseGrade()+getChoosesGrade()+getTFGrade()+getQGrade();
	return grade;
}