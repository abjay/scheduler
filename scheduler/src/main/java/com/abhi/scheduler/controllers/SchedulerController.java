package com.abhi.scheduler.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.abhi.scheduler.models.Appointment;
import com.abhi.scheduler.models.Rule;
import com.abhi.scheduler.services.SchedulerService;

@RestController
@RequestMapping("/api/scheduler")
public class SchedulerController {
	
	@Autowired
	private SchedulerService schedulerService;
	
	@RequestMapping(value = "/allRules", method = RequestMethod.GET)
	public List<Rule> getAllRules() {
 
		return schedulerService.getAllRules();
	}
	
	@RequestMapping(value = "/allAppointments", method = RequestMethod.GET)
	public List<Appointment> getAllAppointments() {
		return schedulerService.getAllAppointments();
	}
	
	@RequestMapping(value = "/getRule/{ruleId}", method = RequestMethod.GET)
	public Optional<Rule> getRule(@PathVariable("ruleId") Integer ruleId) {
		return schedulerService.getRule(ruleId);
	}
	
	@RequestMapping(value = "/getAppointment/{appointmentId}", method = RequestMethod.GET)
	public Optional<Appointment> getAppointment(@PathVariable("appointmentId") Integer appointmentId) {
		return schedulerService.getAppointment(appointmentId);
	}
	
	@RequestMapping(value = "/createRule", method = RequestMethod.POST)
	public Rule createRule(@RequestBody Rule rule) {
		return schedulerService.createRule(rule);
	}
	
	@RequestMapping(value = "/selectTime", method = RequestMethod.POST)
	public Appointment selectTime(@RequestBody Appointment appointment) {
		return schedulerService.selectTime(appointment);
	}
	
	@RequestMapping(value = "/sendEmail", method = RequestMethod.POST)
	public void sendEmail(@RequestBody String emailAddress) {
		schedulerService.sendEmail(emailAddress);
	}
	
	@RequestMapping(value = "/updateBike", method = RequestMethod.POST)
	public Rule updateRule(@RequestBody Rule rule) {
		return schedulerService.updateRule(rule);
	}
	
	@RequestMapping(value = "/deleteRule/{ruleId}", method = RequestMethod.GET)
	public void deleteRule(@PathVariable("ruleId") Integer ruleId) {
		schedulerService.deleteRule(ruleId);
	}
	
	@RequestMapping(value = "/deleteAppointment/{appointmentId}", method = RequestMethod.GET)
	public void deleteAppointment(@PathVariable("appointmentId") Integer appointmentId) {
		schedulerService.deleteAppointment(appointmentId);
	}

}
