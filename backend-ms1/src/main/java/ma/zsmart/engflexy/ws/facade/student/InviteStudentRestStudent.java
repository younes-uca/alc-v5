package  ma.zsmart.engflexy.ws.facade.student;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.InviteStudent;
import ma.zsmart.engflexy.bean.history.InviteStudentHistory;
import ma.zsmart.engflexy.dao.criteria.core.InviteStudentCriteria;
import ma.zsmart.engflexy.dao.criteria.history.InviteStudentHistoryCriteria;
import ma.zsmart.engflexy.service.facade.student.InviteStudentStudentService;
import ma.zsmart.engflexy.ws.converter.InviteStudentConverter;
import ma.zsmart.engflexy.ws.dto.InviteStudentDto;
import ma.zsmart.engflexy.zynerator.controller.AbstractController;
import ma.zsmart.engflexy.zynerator.dto.AuditEntityDto;
import ma.zsmart.engflexy.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.zsmart.engflexy.zynerator.process.Result;

import org.springframework.web.multipart.MultipartFile;
import ma.zsmart.engflexy.zynerator.dto.FileTempDto;

@Api("Manages inviteStudent services")
@RestController
@RequestMapping("/api/student/inviteStudent/")
public class InviteStudentRestStudent  extends AbstractController<InviteStudent, InviteStudentDto, InviteStudentHistory, InviteStudentCriteria, InviteStudentHistoryCriteria, InviteStudentStudentService, InviteStudentConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all inviteStudents")
    @GetMapping("")
    public ResponseEntity<List<InviteStudentDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all inviteStudents")
    @GetMapping("optimized")
    public ResponseEntity<List<InviteStudentDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a inviteStudent by id")
    @GetMapping("id/{id}")
    public ResponseEntity<InviteStudentDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  inviteStudent")
    @PostMapping("")
    public ResponseEntity<InviteStudentDto> save(@RequestBody InviteStudentDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  inviteStudent")
    @PutMapping("")
    public ResponseEntity<InviteStudentDto> update(@RequestBody InviteStudentDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of inviteStudent")
    @PostMapping("multiple")
    public ResponseEntity<List<InviteStudentDto>> delete(@RequestBody List<InviteStudentDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified inviteStudent")
    @DeleteMapping("")
    public ResponseEntity<InviteStudentDto> delete(@RequestBody InviteStudentDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified inviteStudent")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple inviteStudents by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("find by etudiant id")
    @GetMapping("etudiant/id/{id}")
    public List<InviteStudent> findByEtudiantId(@PathVariable Long id){
        return service.findByEtudiantId(id);
    }
    @ApiOperation("delete by etudiant id")
    @DeleteMapping("etudiant/id/{id}")
    public int deleteByEtudiantId(@PathVariable Long id){
        return service.deleteByEtudiantId(id);
    }
    @ApiOperation("Finds inviteStudents by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<InviteStudentDto>> findByCriteria(@RequestBody InviteStudentCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated inviteStudents by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody InviteStudentCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports inviteStudents by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody InviteStudentCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets inviteStudent data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody InviteStudentCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets inviteStudent history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets inviteStudent paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody InviteStudentHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports inviteStudent history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody InviteStudentHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets inviteStudent history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody InviteStudentHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public InviteStudentRestStudent (InviteStudentStudentService service, InviteStudentConverter converter) {
        super(service, converter);
    }


}