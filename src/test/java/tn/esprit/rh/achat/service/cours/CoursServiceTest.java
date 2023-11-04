package tn.esprit.rh.achat.service.cours;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import static org.mockito.Mockito.verify;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.spring.entities.Course;
import tn.esprit.spring.entities.Support;
import tn.esprit.spring.entities.TypeCourse;
import tn.esprit.spring.repositories.ICourseRepository;
import tn.esprit.spring.services.CourseServicesImpl;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
@ExtendWith(MockitoExtension.class)
class CoursServiceTest {

    @Mock private ICourseRepository courseRepository;
    private CourseServicesImpl courseServices;

    @BeforeEach
    void setUp() {
        courseServices = new CourseServicesImpl(courseRepository);
    }

    @Test
    void canGetAllCourse() {
        // when
        courseServices.retrieveAllCourses();
        // then
        verify(courseRepository).findAll();
    }

    @Test
    void canAddCourse() {
        // given
        Course course = new Course(
                1,
                TypeCourse.COLLECTIVE_CHILDREN,
                Support.SKI,
                12
        );

        // when
        courseServices.addCourse(course);

        // then
        ArgumentCaptor<Course> courseArgumentCaptor =
                ArgumentCaptor.forClass(Course.class);

        verify(courseRepository)
                .save(courseArgumentCaptor.capture());

        Course capturedCourse = courseArgumentCaptor.getValue();

        assertThat(capturedCourse).isEqualTo(course);
    }


}
