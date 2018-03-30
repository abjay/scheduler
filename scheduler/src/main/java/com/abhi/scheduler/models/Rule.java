package com.abhi.scheduler.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Rule {
	
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE )
	private Integer id;
	private String day;
	private String timeslot;
 
	public Rule(){
		
	}
	
	public Rule(Integer id, String day, String timeslot) {
		this.id = id;
		this.day = day;
		this.timeslot = timeslot;
	}
 
	public Integer getId() {
		return id;
	}
 
	public void setId(Integer id) {
		this.id = id;
	}
 
	public String getDay() {
		return day;
	}
 
	public void setDay(String day) {
		this.day = day;
	}
 
	public String getTimeslot() {
		return timeslot;
	}
 
	public void setTimeslot(String timeslot) {
		this.timeslot = timeslot;
	}
 
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((timeslot == null) ? 0 : timeslot.hashCode());
		result = prime * result + ((day == null) ? 0 : day.hashCode());
		return result;
	}
 
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Rule other = (Rule) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (timeslot == null) {
			if (other.timeslot != null)
				return false;
		} else if (!timeslot.equals(other.timeslot))
			return false;
		if (day == null) {
			if (other.day != null)
				return false;
		} else if (!day.equals(other.day))
			return false;
		return true;
	}

}
