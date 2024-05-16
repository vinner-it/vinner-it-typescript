# VIN Validador Scania Hack 2024

- [**Teams**](#teams)
- [**VIN Standard Summary**](#vin-standard-summary)
  - [Introduction](#introduction)
  - [Scope](#scope)
  - [Structure of the VIN](#structure-of-the-vin)
  - [Key Elements and Requirements](#key-elements-and-requirements)
  - [Compliance and Responsibility](#compliance-and-responsibility)
  - [References](#references)
  - [Examples](#examples)

# Teams
* PRODUCT team (Forsberg Christer, Oldenkamp Emiel) 
* KOTLIN/JAVA team (Vaddi Shanmukha, Oldenkamp Emiel, Caccin Giulio) - [Kotlin Vin Validator](https://github.com/vinner-it/vinner-it-kotlin)
* Typescript team (Dhanore Yash, Palmér Samuel, Caccin Giulio) - [Typescript Vin Validator](https://github.com/vinner-it/vinner-it-typescript)
* .NET team (Selvad Niclas, Vañó Igual Ximo, Borro Diana) - [.NET Vin Validator](https://github.com/vinner-it/vinner-it-dotnet)
* C++ (Emami Mohsen, Caccin Giulio) - [C++ Vin Validator](https://github.com/vinner-it/vinner-it-cpp)

# VIN Standard Summary

## Introduction
This repository contains the details and implementation guidelines for the ISO 3779:2009 standard, which specifies the content and structure of the Vehicle Identification Number (VIN). The VIN system is used globally to provide a unique identifier for road vehicles, including motor vehicles, towed vehicles, motorcycles, and mopeds.

## Scope
The ISO 3779:2009 standard establishes a uniform identification numbering system for road vehicles. It ensures that each vehicle has a unique VIN that remains consistent for 30 years. This standard applies to all road vehicles as defined in ISO 3833.

## Structure of the VIN
The VIN is composed of three sections:

1. **World Manufacturer Identifier (WMI):** The first section, consisting of three characters, identifies the manufacturer of the vehicle. These characters are assigned by the national organization of the manufacturer's country.

2. **Vehicle Descriptor Section (VDS):** The second section consists of six characters (alphabetical or numerical) determined by the manufacturer. This section describes the general attributes of the vehicle.

3. **Vehicle Indicator Section (VIS):** The third section consists of eight characters, the last four of which are numerical. This section uniquely identifies the specific vehicle and can include information about the model year and manufacturing plant.

## Key Elements and Requirements
- **Characters Used:** The VIN uses a specific set of characters, avoiding the letters I, O, and Q to prevent confusion.
- **Dividers:** Manufacturers may use dividers to separate VIN sections, but these cannot be characters used in the VIN itself or any character that could be confused with VIN characters.
- **Display:** The VIN must be displayed on one line without blanks in documentation. On vehicles or manufacturer’s plates, it can be shown on one or two lines, again without blanks and without splitting sections.

## Compliance and Responsibility
- **Manufacturer's Responsibility:** The manufacturer is responsible for ensuring the uniqueness of the VIN and compliance with the standard. This responsibility can be delegated to a subsidiary company.
- **Year and Model Designation:** The VIS section can include the year and manufacturing plant. A recommended code for designating the year is provided in the standard.

## References
The following documents are indispensable for the application of the ISO 3779:2009 standard:
- ISO 3780: Road vehicles — World manufacturer identifier (WMI) code
- ISO 3833: Road vehicles — Types — Terms and definitions
- ISO 4030: Road vehicles — Vehicle identification number (VIN) — Location and attachment

## Examples

### USA
- **VIN Example:** 1HGCM82633A123456
  - **WMI:** 1HG (Honda - USA)
  - **VDS:** CM8263 (Model details, body type, engine type)
  - **VIS:** 3A123456 (Model year: 2003, Plant: A, Sequential number: 123456)

### Europe
- **VIN Example:** WDBFA76F0VF123456
  - **WMI:** WDB (Daimler AG - Germany)
  - **VDS:** FA76F0 (Model details, body type, engine type)
  - **VIS:** VF123456 (Model year: 1997, Plant: F, Sequential number: 123456)

### Asia
- **VIN Example:** JT3VN39W1W8012345
  - **WMI:** JT3 (Toyota - Japan)
  - **VDS:** VN39W1 (Model details, body type, engine type)
  - **VIS:** W8012345 (Model year: 1998, Plant: 8, Sequential number: 012345)

### Explanation of Components
1. **WMI (World Manufacturer Identifier):**
   - **USA:** Typically starts with 1, 4, or 5. Example: 1HG (Honda USA)
   - **Europe:** Typically starts with letters assigned to European countries. Example: WDB (Daimler AG - Germany)
   - **Asia:** Typically starts with J for Japan or other letters for other Asian countries. Example: JT3 (Toyota - Japan)

2. **VDS (Vehicle Descriptor Section):**
   - A 6-character section describing the vehicle model, body type, engine type, and other attributes. The coding is determined by the manufacturer.

3. **VIS (Vehicle Indicator Section):**
   - An 8-character section. The last four characters are always numerical. It may include the model year and plant code as the first two characters, followed by a unique sequential number.

### Additional Notes
- **Characters Used:** Only the following characters are used in VINs: 1 2 3 4 5 6 7 8 9 0 A B C D E F G H J K L M N P R S T U V W X Y Z. The letters I, O, and Q are omitted to avoid confusion with numbers 1 and 0.
- **Year Codes:** Each year is represented by a specific character in the VIS. For example, 'A' for 2010, 'B' for 2011, and so on.
- **Manufacturing Plant Codes:** Each manufacturer assigns specific codes for their various manufacturing plants.

The standard provides several examples of VIN formats to illustrate its application.

For more detailed information, refer to the full ISO 3779:2009 document. This summary serves as an overview and guide for understanding and implementing the VIN standard in vehicle manufacturing and identification processes.
