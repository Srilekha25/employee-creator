package com.employee.employeecreator.EmployeeCreator;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.employeecreator.exceptions.NotFoundException;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository EmployeeRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	public EmployeeEntity create(EmployeeDTO employeeDTO) {
		EmployeeEntity employeeEntity = new EmployeeEntity();
		employeeEntity.setFirstName(employeeDTO.getFirstName());
		employeeEntity.setMiddleName(employeeDTO.getMiddleName());
		employeeEntity.setLastName(employeeDTO.getLastName());
		employeeEntity.setEmail(employeeDTO.getEmail());
		employeeEntity.setMobileNumber(employeeDTO.getMobileNumber());
		employeeEntity.setAddress(employeeDTO.getAddress());
		employeeEntity.setContractType(employeeDTO.getContractType());
		employeeEntity.setStartDate(employeeDTO.getStartDate());
		employeeEntity.setFinishDate(employeeDTO.getFinishDate());
		employeeEntity.setOngoing(employeeDTO.getOngoing());
		employeeEntity.setTimeBasis(employeeDTO.getTimeBasis());
		
		return this.EmployeeRepository.save(employeeEntity);
		
	}
	
	public List<EmployeeEntity> fetch() {
		return this.EmployeeRepository.findAll();
	}
	
	public Optional<EmployeeEntity> fetchByID(Long id) {
		return this.EmployeeRepository.findById(id);
	}
	
	public EmployeeEntity updateEmployee(Long id, EmployeeDTO employeeDTO) {
	
			EmployeeEntity foundEmployee = this.EmployeeRepository.findById(id).orElseThrow(()->new NotFoundException("Employee not found with id"+id));
			
			mapper.map(employeeDTO, foundEmployee);
			return this.EmployeeRepository.save(foundEmployee);
	}
	
	public void deleteByID(Long id) {
		this.EmployeeRepository.deleteById(id);
	}

}
