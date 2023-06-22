package com.employee.employeecreator.EmployeeCreator;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.employeecreator.exceptions.NotFoundException;

@RestController
@RequestMapping("/EmployeeCreator")
public class EmployeeController {

	@Autowired
	private EmployeeService EmployeeService;
	
	@PostMapping
	public ResponseEntity<EmployeeEntity> addEmployee(@RequestBody EmployeeDTO employeeDTO){
		EmployeeEntity addEmployee = this.EmployeeService.create(employeeDTO);
		return new ResponseEntity<>(addEmployee, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<EmployeeEntity>> getAllEmployees(){
		List<EmployeeEntity> allEmployees = this.EmployeeService.fetch();
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<EmployeeEntity> findByID(@PathVariable Long id){
		EmployeeEntity findByID = this.EmployeeService.fetchByID(id).orElseThrow(() -> new NotFoundException("Employee not found" + id));
		return new ResponseEntity<>(findByID, HttpStatus.OK);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<EmployeeEntity> updateEmployeeByID(@PathVariable Long id, @RequestBody EmployeeDTO employeeDTO){
	
			EmployeeEntity updateEmployeeByID = this.EmployeeService.updateEmployee(id, employeeDTO);
			return new ResponseEntity<>(updateEmployeeByID, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<EmployeeEntity> deleteEmployeeByID(@PathVariable Long id){
		this.EmployeeService.deleteByID(id);
		return new ResponseEntity<EmployeeEntity>(HttpStatus.OK);
	}
}
