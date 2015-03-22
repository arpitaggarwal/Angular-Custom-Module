package com.test.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mobile.device.Device;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RequestMapping("/log")
@Controller
public class ClientSideErrorLoggingController {
	private final static Logger LOGGER = LoggerFactory
			.getLogger(ClientSideErrorLoggingController.class);

	@RequestMapping(value = "/logClientErrors", method = RequestMethod.POST)
	public void logErrors(@RequestBody String exceptionBean, Device device) {
		try {
			LOGGER.error("Cleint side error is :: {}", exceptionBean.toString());
		} catch (Exception ex) {
			LOGGER.error("Error while writing client side logs to file", ex);
		}
	}
}