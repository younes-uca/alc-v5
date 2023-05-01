package  ma.zsmart.engflexy.ws.facade.teacher;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.TypeReclamationProf;
import ma.zsmart.engflexy.bean.history.TypeReclamationProfHistory;
import ma.zsmart.engflexy.dao.criteria.core.TypeReclamationProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.TypeReclamationProfHistoryCriteria;
import ma.zsmart.engflexy.service.facade.teacher.TypeReclamationProfTeacherService;
import ma.zsmart.engflexy.ws.converter.TypeReclamationProfConverter;
import ma.zsmart.engflexy.ws.dto.TypeReclamationProfDto;
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

@Api("Manages typeReclamationProf services")
@RestController
@RequestMapping("/api/teacher/typeReclamationProf/")
public class TypeReclamationProfRestTeacher  extends AbstractController<TypeReclamationProf, TypeReclamationProfDto, TypeReclamationProfHistory, TypeReclamationProfCriteria, TypeReclamationProfHistoryCriteria, TypeReclamationProfTeacherService, TypeReclamationProfConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all typeReclamationProfs")
    @GetMapping("")
    public ResponseEntity<List<TypeReclamationProfDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all typeReclamationProfs")
    @GetMapping("optimized")
    public ResponseEntity<List<TypeReclamationProfDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a typeReclamationProf by id")
    @GetMapping("id/{id}")
    public ResponseEntity<TypeReclamationProfDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  typeReclamationProf")
    @PostMapping("")
    public ResponseEntity<TypeReclamationProfDto> save(@RequestBody TypeReclamationProfDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  typeReclamationProf")
    @PutMapping("")
    public ResponseEntity<TypeReclamationProfDto> update(@RequestBody TypeReclamationProfDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of typeReclamationProf")
    @PostMapping("multiple")
    public ResponseEntity<List<TypeReclamationProfDto>> delete(@RequestBody List<TypeReclamationProfDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified typeReclamationProf")
    @DeleteMapping("")
    public ResponseEntity<TypeReclamationProfDto> delete(@RequestBody TypeReclamationProfDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified typeReclamationProf")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple typeReclamationProfs by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("Finds typeReclamationProfs by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<TypeReclamationProfDto>> findByCriteria(@RequestBody TypeReclamationProfCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated typeReclamationProfs by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody TypeReclamationProfCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports typeReclamationProfs by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody TypeReclamationProfCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets typeReclamationProf data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody TypeReclamationProfCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets typeReclamationProf history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets typeReclamationProf paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody TypeReclamationProfHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports typeReclamationProf history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody TypeReclamationProfHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets typeReclamationProf history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody TypeReclamationProfHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public TypeReclamationProfRestTeacher (TypeReclamationProfTeacherService service, TypeReclamationProfConverter converter) {
        super(service, converter);
    }


}