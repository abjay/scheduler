package com.abhi.scheduler.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abhi.scheduler.email.SchedulerSendEmail;
import com.abhi.scheduler.models.Appointment;
import com.abhi.scheduler.models.Rule;
import com.abhi.scheduler.repositories.AppointmentRepository;
import com.abhi.scheduler.repositories.RuleRepository;
import com.abhi.scheduler.services.SchedulerService;

@Service
public class SchedulerServiceImpl implements SchedulerService{
	
	@Autowired
	private RuleRepository ruleRepository;
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Override
	public List<Rule> getAllRules() {
		List<Rule> rules = new ArrayList<Rule>();
		Iterator<Rule> iterator = ruleRepository.findAll().iterator();
		while (iterator.hasNext()) {
			rules.add(iterator.next());
		}

		return rules;
	}
	
	@Override
	public List<Appointment> getAllAppointments() {
		List<Appointment> appointments = new ArrayList<Appointment>();
		Iterator<Appointment> iterator2 = appointmentRepository.findAll().iterator();
		while (iterator2.hasNext()) {
			appointments.add(iterator2.next());
		}

		return appointments;
	}
	
	@Override
	public Optional<Rule> getRule(Integer ruleId) {
		return ruleRepository.findById(ruleId);
	}
	
	@Override
	public Optional<Appointment> getAppointment(Integer appointmentId) {
		return appointmentRepository.findById(appointmentId);
	}
	
	@Override
	public Rule createRule(Rule rule) {
		return ruleRepository.save(rule);
	}
	
	@Override
	public Appointment selectTime(Appointment appointment) {
		return appointmentRepository.save(appointment);
	}
	
	@Override
	public void sendEmail(String emailAddress) {
		SchedulerSendEmail.sendEmail(emailAddress);
	}
	
	@Override
	public Rule updateRule(Rule rule) {
		final Appointment appointment = new Appointment(rule.getId(), rule.getDay(), rule.getTimeslot());
		
		return ruleRepository.save(rule);
	}
	
	@Override
	public void deleteRule(Integer ruleId) {
		ruleRepository.deleteById(ruleId);
	}
	
	@Override
	public void deleteAppointment(Integer appointmentId) {
		appointmentRepository.deleteById(appointmentId);
	}

}
