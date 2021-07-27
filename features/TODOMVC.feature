Feature: TODO MVC
  In order to achieve my goals
  As a orginized person
  I want to be able to interact with a Todo MVC

Background: Open a Todo Web application
    Given I open the Todo application

@Create&ReadTask
  Scenario: Create a new To Do Task
    When I enter a "Task 1" of new Task
    Then I should see "Task 1" in Tasks list

@UpdateTask
  Scenario: Update a created Task
    When I enter a "Task 1" of new Task
    And I update a "Task 1" Task with "Task 1.2"
    Then I should see "Task 1.2" in Tasks list

@DeleteTask
  Scenario: Delete a created Task
    When I enter a "Task 1" of new Task
    And I delete a "Task 1" Task
    Then I should not see "Task 1" in Task list  

@DoneTask
  Scenario: Set Task to Done
    When I enter a "Task 1" of new Task
    And I select a "Task 1" to Done
    Then I should see "Task 1" with crossed out line

@GrabTasks
  Scenario: Grab all tasks
    When I enter a "Task 1" of new Task
    And I enter a "Task 2" of new Task
    And I enter a "Task 3" of new Task
    #And I grab the all tasks
    Then I should see all task in Tasks list
        | task   |
        | Task 1 |
        | Task 2 |
        | Task 3 |

@NewTask
Scenario: Add new task
    When I enter a "Task New" of new Task
    Then I should see "Task New2" in Tasks list