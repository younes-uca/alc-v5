package  ma.zsmart.engflexy.ws.facade.student;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.NiveauEtude;
import ma.zsmart.engflexy.bean.history.NiveauEtudeHistory;
import ma.zsmart.engflexy.dao.criteria.core.NiveauEtudeCriteria;
import ma.zsmart.engflexy.dao.criteria.history.NiveauEtudeHistoryCriteria;
import ma.zsmart.engflexy.service.facade.student.NiveauEtudeStudentService;
import ma.zsmart.engflexy.ws.converter.NiveauEtudeConverter;
import ma.zsmart.engflexy.ws.dto.NiveauEtudeDto;
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

@Api("Manages niveauEtude services")
@RestController
@RequestMapping("/api/student/niveauEtude/")
public class NiveauEtudeRestStudent  extends AbstractController<NiveauEtude, NiveauEtudeDto, NiveauEtudeHistory, NiveauEtudeCriteria, NiveauEtudeHistoryCriteria, NiveauEtudeStudentService, NiveauEtudeConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all niveauEtudes")
    @GetMapping("")
    public ResponseEntity<List<NiveauEtudeDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all niveauEtudes")
    @GetMapping("optimized")
    public ResponseEntity<List<NiveauEtudeDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a niveauEtude by id")
    @GetMapping("id/{id}")
    public ResponseEntity<NiveauEtudeDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  niveauEtude")
    @PostMapping("")
    public ResponseEntity<NiveauEtudeDto> save(@RequestBody NiveauEtudeDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  niveauEtude")
    @PutMapping("")
    public ResponseEntity<NiveauEtudeDto> update(@RequestBody NiveauEtudeDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of niveauEtude")
    @PostMapping("multiple")
    public ResponseEntity<List<NiveauEtudeDto>> delete(@RequestBody List<NiveauEtudeDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified niveauEtude")
    @DeleteMapping("")
    public ResponseEntity<NiveauEtudeDto> delete(@RequestBody NiveauEtudeDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified niveauEtude")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple niveauEtudes by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("Finds niveauEtudes by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<NiveauEtudeDto>> findByCriteria(@RequestBody NiveauEtudeCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated niveauEtudes by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody NiveauEtudeCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports niveauEtudes by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody NiveauEtudeCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets niveauEtude data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody NiveauEtudeCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets niveauEtude history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets niveauEtude paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody NiveauEtudeHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports niveauEtude history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody NiveauEtudeHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets niveauEtude history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody NiveauEtudeHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public NiveauEtudeRestStudent (NiveauEtudeStudentService service, NiveauEtudeConverter converter) {
        super(service, converter);
    }


}