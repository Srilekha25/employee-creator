package com.employee.employeecreator.EmployeeCreator;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Employee_list")
public class EmployeeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String firstName;
	@Column
	private String middleName;
	@Column
	private String lastName;
	@Column
	private String email;
	@Column
	private String mobileNumber;
	@Column
	private String address;
	@Column
	private String contractType;
	@Column
	private Date startDate;
	@Column
	private Date finishDate;
	@Column
	private Boolean ongoing;
	@Column
	private String timeBasis;
	@Column
	private String hours;
	public EmployeeEntity(Long id, String firstName, String middleName, String lastName, String email,
			String mobileNumber, String address, String contractType, Date startDate, Date finishDate, Boolean ongoing,
			String timeBasis,  String hours) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.contractType = contractType;
		this.startDate = startDate;
		this.finishDate = finishDate;
		this.ongoing = ongoing;
		this.timeBasis = timeBasis;
		this.hours = hours;
	}
	public EmployeeEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContractType() {
		return contractType;
	}
	public void setContractType(String contractType) {
		this.contractType = contractType;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getFinishDate() {
		return finishDate;
	}
	public void setFinishDate(Date finishDate) {
		this.finishDate = finishDate;
	}
	public Boolean getOngoing() {
		return ongoing;
	}
	public void setOngoing(Boolean ongoing) {
		this.ongoing = ongoing;
	}
	public String getTimeBasis() {
		return timeBasis;
	}
	public void setTimeBasis(String timeBasis) {
		this.timeBasis = timeBasis;
	}
	public String getHours() {
		return hours;
	}
	public void setHours(String hours) {
		this.hours = hours;
	}
	
	
}
