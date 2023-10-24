<?php

/**
 * XrpTx_meta_AffectedNodes_inner_ModifiedNode_FinalFields Model
 *
 * @copyright (c) 2022-2023 tatum.io
 * @license   MIT
 * @package   Tatum
 * @author    Mark Jivko
 * @link      https://tatum.io/
 *
 * NOTE: This class is auto-generated by tatum.io
 * Do not edit this file manually!
 */

namespace Tatum\Model;
!defined("TATUM-SDK") && exit();

/**
 * XrpTx_meta_AffectedNodes_inner_ModifiedNode_FinalFields Model
 */
class XrpTxMetaAffectedNodesInnerModifiedNodeFinalFields extends AbstractModel {

    public const _D = null;
    protected static $_name = "XrpTx_meta_AffectedNodes_inner_ModifiedNode_FinalFields";
    protected static $_definition = [
        "account" => ["Account", "string", null, "getAccount", "setAccount", null, ["r" => 0]], 
        "balance" => ["Balance", "string", null, "getBalance", "setBalance", null, ["r" => 0]], 
        "flags" => ["Flags", "float", null, "getFlags", "setFlags", null, ["r" => 0]], 
        "owner_count" => ["OwnerCount", "float", null, "getOwnerCount", "setOwnerCount", null, ["r" => 0]], 
        "sequence" => ["Sequence", "float", null, "getSequence", "setSequence", null, ["r" => 0]]
    ];

    /**
     * XrpTxMetaAffectedNodesInnerModifiedNodeFinalFields
     *
     * @param mixed[] $data Model data
     */
    public function __construct(array $data = []) {
        foreach(static::$_definition as $k => $v) {
            $this->_data[$k] = isset($data[$k]) ? $data[$k] : $v[5];
        }
    }


    /**
     * Get account
     *
     * @return string|null
     */
    public function getAccount(): ?string {
        return $this->_data["account"];
    }

    /**
     * Set account
     * 
     * @param string|null $account account
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setAccount(?string $account) {
        return $this->_set("account", $account);
    }

    /**
     * Get balance
     *
     * @return string|null
     */
    public function getBalance(): ?string {
        return $this->_data["balance"];
    }

    /**
     * Set balance
     * 
     * @param string|null $balance balance
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setBalance(?string $balance) {
        return $this->_set("balance", $balance);
    }

    /**
     * Get flags
     *
     * @return float|null
     */
    public function getFlags(): ?float {
        return $this->_data["flags"];
    }

    /**
     * Set flags
     * 
     * @param float|null $flags flags
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setFlags(?float $flags) {
        return $this->_set("flags", $flags);
    }

    /**
     * Get owner_count
     *
     * @return float|null
     */
    public function getOwnerCount(): ?float {
        return $this->_data["owner_count"];
    }

    /**
     * Set owner_count
     * 
     * @param float|null $owner_count owner_count
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setOwnerCount(?float $owner_count) {
        return $this->_set("owner_count", $owner_count);
    }

    /**
     * Get sequence
     *
     * @return float|null
     */
    public function getSequence(): ?float {
        return $this->_data["sequence"];
    }

    /**
     * Set sequence
     * 
     * @param float|null $sequence sequence
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setSequence(?float $sequence) {
        return $this->_set("sequence", $sequence);
    }
}