package  ma.zsmart.engflexy.ws.facade.student;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.HoweWorkQSTReponse;
import ma.zsmart.engflexy.bean.history.HoweWorkQSTReponseHistory;
import ma.zsmart.engflexy.dao.criteria.core.HoweWorkQSTReponseCriteria;
import ma.zsmart.engflexy.dao.criteria.history.HoweWorkQSTReponseHistoryCriteria;
import ma.zsmart.engflexy.service.facade.student.HoweWorkQSTReponseStudentService;
import ma.zsmart.engflexy.ws.converter.HoweWorkQSTReponseConverter;
import ma.zsmart.engflexy.ws.dto.HoweWorkQSTReponseDto;
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

@Api("Manages howeWorkQSTReponse services")
@RestController
@RequestMapping("/api/student/howeWorkQSTReponse/")
public class HoweWorkQSTReponseRestStudent  extends AbstractController<HoweWorkQSTReponse, HoweWorkQSTReponseDto, HoweWorkQSTReponseHistory, HoweWorkQSTReponseCriteria, HoweWorkQSTReponseHistoryCriteria, HoweWorkQSTReponseStudentService, HoweWorkQSTReponseConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all howeWorkQSTReponses")
    @GetMapping("")
    public ResponseEntity<List<HoweWorkQSTReponseDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all howeWorkQSTReponses")
    @GetMapping("optimized")
    public ResponseEntity<List<HoweWorkQSTReponseDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a howeWorkQSTReponse by id")
    @GetMapping("id/{id}")
    public ResponseEntity<HoweWorkQSTReponseDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  howeWorkQSTReponse")
    @PostMapping("")
    public ResponseEntity<HoweWorkQSTReponseDto> save(@RequestBody HoweWorkQSTReponseDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  howeWorkQSTReponse")
    @PutMapping("")
    public ResponseEntity<HoweWorkQSTReponseDto> update(@RequestBody HoweWorkQSTReponseDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of howeWorkQSTReponse")
    @PostMapping("multiple")
    public ResponseEntity<List<HoweWorkQSTReponseDto>> delete(@RequestBody List<HoweWorkQSTReponseDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified howeWorkQSTReponse")
    @DeleteMapping("")
    public ResponseEntity<HoweWorkQSTReponseDto> delete(@RequestBody HoweWorkQSTReponseDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified howeWorkQSTReponse")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple howeWorkQSTReponses by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("find by etatReponse id")
    @GetMapping("etatReponse/id/{id}")
    public List<HoweWorkQSTReponse> findByEtatReponseId(@PathVariable Long id){
        return service.findByEtatReponseId(id);
    }
    @ApiOperation("delete by etatReponse id")
    @DeleteMapping("etatReponse/id/{id}")
    public int deleteByEtatReponseId(@PathVariable Long id){
        return service.deleteByEtatReponseId(id);
    }
    @ApiOperation("find by homeWorkQuestion id")
    @GetMapping("homeWorkQuestion/id/{id}")
    public List<HoweWorkQSTReponse> findByHomeWorkQuestionId(@PathVariable Long id){
        return service.findByHomeWorkQuestionId(id);
    }
    @ApiOperation("delete by homeWorkQuestion id")
    @DeleteMapping("homeWorkQuestion/id/{id}")
    public int deleteByHomeWorkQuestionId(@PathVariable Long id){
        return service.deleteByHomeWorkQuestionId(id);
    }
    @ApiOperation("Finds howeWorkQSTReponses by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<HoweWorkQSTReponseDto>> findByCriteria(@RequestBody HoweWorkQSTReponseCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated howeWorkQSTReponses by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody HoweWorkQSTReponseCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports howeWorkQSTReponses by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody HoweWorkQSTReponseCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets howeWorkQSTReponse data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody HoweWorkQSTReponseCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets howeWorkQSTReponse history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets howeWorkQSTReponse paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody HoweWorkQSTReponseHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports howeWorkQSTReponse history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody HoweWorkQSTReponseHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets howeWorkQSTReponse history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody HoweWorkQSTReponseHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public HoweWorkQSTReponseRestStudent (HoweWorkQSTReponseStudentService service, HoweWorkQSTReponseConverter converter) {
        super(service, converter);
    }


}